"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Search, Mic, X, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SearchCard from "./SearchCard";
import { useTranslations } from "next-intl";
import useVoiceInput from "@/hooks/useVoiceInput";
import { debounce, MOCK_PRODUCTS, Product } from "@/lib/helper";

// Voice Wave Animation Component
const VoiceWave = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex gap-0.5">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-0.5 bg-primary rounded-full animate-pulse"
            style={{
              height: "12px",
              animationDelay: `${i * 0.1}s`,
              animationDuration: "0.6s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const SearchComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const { isMicActive, handleVoiceSearch } = useVoiceInput({
    onresult: (transcript) => {
      setSearchQuery(transcript);
      saveSearchToHistory(transcript);
      setShowDropdown(true);
    },
  });
  const t = useTranslations("search");

  useEffect(() => {
    try {
      const storedHistory = JSON.parse(
        localStorage.getItem(`searchHistory`) || "[]"
      ) as string[];
      setSearchHistory(storedHistory);
    } catch (error) {
      console.error("Failed to load search history from localStorage:", error);
      setSearchHistory([]);
    }
  }, []);

  const saveSearchHistory = (history: string[]) => {
    try {
      localStorage.setItem(`searchHistory`, JSON.stringify(history));
    } catch (error) {
      console.error("Failed to save search history to localStorage:", error);
    }
  };

  const performSearch = useCallback(
    debounce((query: string) => {
      if (query.trim() === "") {
        setSearchResults([]);
        return;
      }
      //api call
      const filteredProducts = MOCK_PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredProducts);
      setShowDropdown(true);
    }, 300),
    []
  );

  useEffect(() => {
    performSearch(searchQuery);
  }, [searchQuery, performSearch]);

  const saveSearchToHistory = useCallback(
    (query: string) => {
      if (query.trim() === "") return;

      setSearchHistory((prevHistory) => {
        const newHistory = [
          query,
          ...prevHistory.filter((item) => item !== query),
        ].slice(0, 8);

        saveSearchHistory(newHistory);
        return newHistory;
      });
    },
    [saveSearchHistory]
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setShowDropdown(true);
  };

  const handleSearchSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (searchQuery.trim() === "") return;
      saveSearchToHistory(searchQuery);
      console.log(`Searching for: ${searchQuery}`);
      setShowDropdown(false);
    }
  };

  const handleHistorySelect = (historyItem: string) => {
    setSearchQuery(historyItem);
    saveSearchToHistory(historyItem);
    setShowDropdown(false);
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem(`searchHistory`);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setShowDropdown(false);
  };

  const removeHistoryItem = (index: number) => {
    setSearchHistory((prev) => {
      const newHistory = prev.filter((_, i) => i !== index);
      saveSearchHistory(newHistory);
      return newHistory;
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchContainerRef} className="w-full relative">
      {/* Search Input Container */}
      <div className="relative">
        <Search
          className={`absolute start-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground`}
        />
        <Input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setShowDropdown(true)}
          onKeyDown={handleSearchSubmit}
          placeholder={t("searchPlaceholder")}
          className={`ps-10 h-12`}
        />
        <div
          className={`absolute end-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1`}
        >
          {searchQuery && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleClearSearch}
              className="h-6 w-6 p-0 hover:bg-accent"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </Button>
          )}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleVoiceSearch}
            className={`h-8 w-8 p-0 hover:bg-accent relative transition-all duration-200 ${
              isMicActive
                ? "bg-secondary text-primary scale-110"
                : "text-muted-foreground"
            }`}
          >
            {isMicActive ? (
              <VoiceWave isActive={isMicActive} />
            ) : (
              <Mic className="h-4 w-4" />
            )}
            {isMicActive && (
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
            )}
          </Button>
        </div>
      </div>

      {/* Search Dropdown */}
      {showDropdown && (
        <Card className="absolute p-0 z-10 w-full mt-2 shadow-lg">
          <CardContent className="p-0">
            {/* Search History Section */}
            {searchHistory.length > 0 && searchQuery.trim() === "" && (
              <div>
                <div className="flex justify-between items-center p-2">
                  <span className="text-sm font-medium text-foreground">
                    {t("searchHistory")}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearHistory}
                    className="text-destructive hover:text-destructive/90 text-sm p-1 h-auto"
                  >
                    {t("clearAll")}
                  </Button>
                </div>
                <div className="space-y-1 h-90 overflow-y-auto">
                  {searchHistory.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 px-2 hover:bg-accent rounded-md cursor-pointer transition-colors"
                    >
                      <div
                        onClick={() => handleHistorySelect(item)}
                        className={`flex-1 flex items-center gap-3`}
                      >
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">{item}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeHistoryItem(index);
                        }}
                        className="h-6 w-6 p-0 hover:bg-accent"
                      >
                        <X className="h-3 w-3 text-muted-foreground" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Separator between sections */}
            {searchHistory.length > 0 &&
              searchQuery.trim() === "" &&
              searchResults.length > 0 && <Separator />}

            {/* Search Results Section */}
            {searchQuery.trim() !== "" && (
              <div className="p-4 my-2 h-90 overflow-y-auto">
                <div className="text-sm font-medium text-foreground/90">
                  {t("products")}
                </div>
                {searchResults.length > 0 ? (
                  <div className="space-y-2">
                    {searchResults.map((product) => (
                      <SearchCard key={product.id} {...product} />
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-4">
                    {t("noProductsFound")}
                  </p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchComponent;

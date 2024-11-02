/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Search as SearchIcon, X } from "react-feather";
import { Container } from "./styles";
import { SearchProps } from "./types";
import { useDebounce } from "../../hooks/useDebounce";

export function Search({
  inputWidth,
  currenteValue,
  message,
  onSearch,
  height,
  isCurrent,
}: SearchProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");
    onSearch("");
  }, [isCurrent]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currenteValue && currenteValue.length > 0) {
        setValue(currenteValue);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currenteValue]);

  const debounceChange = useDebounce(onSearch, 400);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    debounceChange(e.target.value);
  }

  return (
    <Container size={inputWidth} height={height}>
      <SearchIcon color="#79747E" />
      <input
        type="text"
        placeholder={message}
        value={value}
        onChange={handleChange}
      />
      {value && (
        <button
          type="button"
          onClick={() => {
            setValue("");
            onSearch("");
          }}
        >
          <X color="#79747E" />
        </button>
      )}
    </Container>
  );
}

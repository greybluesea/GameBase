import { create } from "zustand";
import { Genre } from "../services/axiosClientForGenres";
import { Platform } from "../services/axiosClientForPlatforms";
import { Sort } from "../components/SortSelector";

interface QueryGameStore {
  genreQuery: Genre | null;
  platformQuery: Platform | null;
  sortQuery: Sort | null;
  searchTextQuery: string | null;
  selectGenre: (genre: Genre) => void;
  selectPlatform: (platform: Platform) => void;
  selectSort: (sort: Sort) => void;
  setSearchText: (searchText: string) => void;
  resetAllFilters: () => void;
}

const useQueryGameStore = create<QueryGameStore>((set) => ({
  genreQuery: null,
  platformQuery: null,
  sortQuery: null,
  searchTextQuery: null,
  selectGenre: (genre) =>
    set(() => ({
      genreQuery: {
        id: genre.id,
        name: genre.name,
        image_background: genre.image_background,
        slug: genre.slug,
      },
    })),
  selectPlatform: (platform) =>
    set(() => ({
      platformQuery: {
        id: platform.id,
        name: platform.name,
        slug: platform.slug,
      },
    })),
  selectSort: (sort) =>
    set(() => ({
      sortQuery: sort,
    })),
  setSearchText: (searchText) =>
    set(() => ({
      /* genreQuery: null,
      platformQuery: null,
      sortQuery: null, */
      searchTextQuery: searchText,
    })),
  resetAllFilters: () =>
    set(() => ({
      genreQuery: null,
      platformQuery: null,
      sortQuery: null,
      searchTextQuery: null,
    })),
}));

export default useQueryGameStore;

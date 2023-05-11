/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_STORAGE_SECRET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
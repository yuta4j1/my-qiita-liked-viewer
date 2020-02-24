import { shell } from 'electron'

export function openExternalBrowser(url: string): void {
  shell.openExternal(url)
}

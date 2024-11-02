export function basicEmail(value: string) {
  const dots = /\.{2,}/g;
  const space = /\s+/g;
  return value?.trim().replace(dots, ".").replace(space, "");
}

export function alphanumericAccentSpecialChar(value: string) {
  return value?.replace(/(^\s+|\s{2,}|[^A-Za-zÀ-ÿ0-9.,&()-\s])/g, "");
}

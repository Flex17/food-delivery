type Mods = Record<string, Boolean | string | undefined>;

export const classNames = (cls: string, mods: Mods = {}, additional: (string | undefined)[] = []): string => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className),
].join(" ");

export const formatTextWithStrongTags = (text: string) => {
  const parts = text.split(/(__[^__]+__)/g);
  return parts.map((part, index) => {
    if (part.startsWith("__") && part.endsWith("__")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

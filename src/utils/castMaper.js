export const castMaper = cast => {
  return cast.map(({ id, character, name, profile_path }) => ({
    id,
    character,
    name,
    profile_path,
  }));
};

export const toggleAuthMode = (
  setAuthMode: React.Dispatch<React.SetStateAction<boolean>>,
  setMain: React.Dispatch<React.SetStateAction<boolean>>,
  mode: boolean
) => {
  setAuthMode(mode);
  setMain(false);
};

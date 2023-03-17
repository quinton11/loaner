export const toggleMain = (
  setMain: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setMain(true);
  console.log("Main toggled");
};

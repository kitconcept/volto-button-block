export const ButtonBlockDataAdapter = ({
  block,
  data,
  id,
  onChangeBlock,
  value,
}) => {
  onChangeBlock(block, {
    ...data,
    [id]: value,
  });
};

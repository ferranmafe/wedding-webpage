export const Loading = ({
  isLoading,
  children,
  skeleton,
}: {
  isLoading: boolean;
  children: React.ReactNode;
  skeleton: React.ReactNode;
}) => {
  return isLoading ? skeleton : children;
};

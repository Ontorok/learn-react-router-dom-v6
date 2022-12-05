import MainNavigation from "./MainNavigation";

function RootLayout({ children }: any) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}

export default RootLayout;

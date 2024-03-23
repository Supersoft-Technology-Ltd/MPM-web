import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = localStorage.getItem("accessToken");
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return <>{children}</>;
};

export default LayoutContainer;

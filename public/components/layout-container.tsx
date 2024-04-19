import { useRouter } from "next/navigation";
import {
  CSSProperties,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { ClipLoader } from "react-spinners";

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = localStorage.getItem("accessToken");
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "blue",
  };
  useLayoutEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, router]);
  if (loading) {
    <ClipLoader
      color={"blue"}
      loading={true}
      cssOverride={override}
      size={25}
      aria-label="Loading Spinner"
      data-testid="loader"
    />;
  }
  return <>{children}</>;
};

export default LayoutContainer;

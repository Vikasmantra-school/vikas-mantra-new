import { useRouter } from "next/router";

export function useCampus() {
  const { asPath } = useRouter();
  const isMambakkam = asPath.startsWith("/mambakkam-site");
  const isChengalpattu = asPath.startsWith("/chengalpattu-site");

  const campus = isMambakkam
    ? "mambakkam"
    : isChengalpattu
    ? "chengalpattu"
    : null;

  return { campus, isMambakkam, isChengalpattu };
}

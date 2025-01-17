export const getUriParams = (router) => router.asPath.includes("?") && (router.asPath && Object.fromEntries([...new URLSearchParams(router.asPath.split("?")[1]).entries()]))

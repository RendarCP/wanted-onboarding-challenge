const useRouter = () => {
  const push = (path: string) => {
    history.pushState(null, "", path);
    // pushState의 경우 popState가 발생되지 않기때문에 의도적으로 동작되도록 Event 생성
    window.dispatchEvent(new Event("popstate"));
  };
  return { push };
};

export default useRouter;

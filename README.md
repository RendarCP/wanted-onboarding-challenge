# wanted-onboarding-challenge

### React와 History API 사용하여 SPA Router 기능 구현하기

## 프로젝트 실행

```bash
# install
yarn install
# 실행
yarn dev
```

## 요구사항

**1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**

- `/` → `root` 페이지
- `/about` → `about` 페이지

**2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

- 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)

1. Router.tsx

```javascript
export const Router = ({ children }: RouterProps) => {
  const [path, setPath] = useState(window.location.pathname);

  const routerUpdate = () => {
    setPath(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener("popstate", routerUpdate);
    return () => {
      window.removeEventListener("popstate", routerUpdate);
    };
  }, []);

  // --- 현재 path왜 children props path와 같을시 특정 children 렌더링
  return (
    <>
      {React.Children.toArray(children).map(
        (router: React.ReactNode | React.ReactElement) => {
          return router.props.path == path && router;
        }
      )}
    </>
  );
};
```

- pathname을 통하여 가져온 path와 children path와 동일할시에 라우터

2. Route.tsx

```javascript
export const Route = ({ path, element }: RouteProps) => {
  return <div>{element}</div>;
};
```

- Route는 children만 내려주는 구조로 동작

**3) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.**

- useRouter

```javascript
const useRouter = () => {
  const push = (path: string) => {
    history.pushState(null, "", path);
    // pushState의 경우 popState가 발생되지 않기때문에 의도적으로 동작되도록 Event 생성
    window.dispatchEvent(new Event("popstate"));
  };
  return { push };
};

export default useRouter;
```

- pushState의경우 popState가 발생되지 않으니 관련된 이벤트를 생성 하여 의도적으로 동작되게 한다.

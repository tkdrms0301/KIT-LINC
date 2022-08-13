// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import LoadingState from 'state/Loading';
import Loading from 'components/Loading';
import { useRecoilState } from 'recoil';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //
const App = () => {
    const [loading, setLoading] = useRecoilState(LoadingState);

    return (
        <>
            {loading === true ? <Loading /> : null}
            <ThemeCustomization>
                <ScrollTop>
                    <Routes />
                </ScrollTop>
            </ThemeCustomization>
        </>
    );
};

export default App;

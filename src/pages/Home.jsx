import Banner from "../components/Banner";
import RecentQueries from "../components/RecentQueries";
import TinyBanner from "../components/TinyBanner";


const Home = () => {
    return (
        <div className=" ">
            <Banner />
            <TinyBanner />
            <RecentQueries />
        </div>
    );
};

export default Home;
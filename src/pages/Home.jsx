import HomeAdverts from '../components/HomeAdverts';
import HomeMainContent from '../components/HomeMainContent';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <HomeMainContent />
            <HomeAdverts />
        </div>
    )
}

export default Home;

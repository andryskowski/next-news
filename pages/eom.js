import styles from '../styles/EOM.module.css';
import {Toolbar} from '../components/toolbar';

export const EOM = ({Author}) => {
    return(
        <div className='page-container'>
            <Toolbar></Toolbar>
            <div className={styles.main}>
                <h1>Author </h1>
                <div className={styles.author}>
                    <h3>{Author.name}</h3>
                    <h6>{Author.position}</h6>
                    <img src={author.image}/>
                    <p>{Author.description}</p>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        // https://my-json-server.typicode.com/andryskowski/next-news/db
        //http://my-json-server.typicode.com/portexe/next-news/AuthorOfTheMonth
        `https://my-json-server.typicode.com/andryskowski/next-news/Author`,
    );
    const Author = await apiResponse.json();

    return {
        props: {
            Author
        }
    }
};

export default EOM;
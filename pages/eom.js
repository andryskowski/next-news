export const EOM = ({employee}) => {
    return(
        <div className='page-container'>
            <div>
                <h1>Employee of the month </h1>
            </div>
        </div>
    );
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        `http://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth`,
    );
};

export default EOM;
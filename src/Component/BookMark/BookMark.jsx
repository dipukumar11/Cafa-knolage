import Bookmar from "../Bookmar/Bookmar";


const BookMark = ({bookmarks}) => {
    return (
        <div className="ml-10">
            <h1 className="text-3xl font-bold">Book mark:{bookmarks.length} </h1>
            {
                bookmarks.map(bookmar => <Bookmar key={bookmar.id} bookMark={bookmar}></Bookmar>)
            }
        </div>
    );
};

export default BookMark;
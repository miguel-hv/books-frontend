
const BookCard = ({title, description, id}) => {
    let Description;

    if(description && description.length){
        Description = (
            
                description.map(e => (
                    <p key={e._id} className="font-normal text-gray-700 dark:text-gray-400">
                    {e.first_name} {e.last_name}
                    </p>
                    ))
            
        );
    }
    return(
        <div>
            <a href={'/book/'+id} className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}</h5>
            {Description}
            </a> 
        </div>

    );
};

export default BookCard;
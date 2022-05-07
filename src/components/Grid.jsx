
const Grid = ({children}) => {
    return(
        // <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {children}
            </div>
        // </div>
    );
};

export default Grid;
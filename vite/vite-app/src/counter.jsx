function counter () {
    const increaseHandler = () => { console.log ("increase");
    return (
        <div>
           <h5>counter</h5> 
           <button onClick={increaseHandler}> increase </button>
        </div>
    );

    };
};
export default counter;
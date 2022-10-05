export const HeroBtn = ({
    children,
    classnames,
    eventHandler,
    disableProperty=false
  }) => {
    return (
      <button
        onClick={eventHandler}
        className={`bg-primary-color px-5 py-1 text-lg text-white-neutral rounded-md hover:bg-primary-pale ${classnames} ${disableProperty ? "cursor-not-allowed" : "cursor-pointer"}`}
        disabled={disableProperty} 
      >
        {children}
      </button>
    );
  };
  

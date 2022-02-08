function TestChildren({children, className}) {
    const classes = 'bg-slate-200 ' + className;
    
    return <div className={classes}>{children}</div>
}

export default TestChildren;
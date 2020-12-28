import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import ClickAwayListener from "./ListenClickAway/ClickAwayListener"
import "./index.css"

export default function GoogleTypeahead(props) {

    const { zIndex, id, canCreate, limit, className, options, value: search, setValue, isCaseSensitive, defaultOpen, emptyLabel, LeftSideComponent, RightSideComponent, onClick, onChange, onKeyDown, ...remainingProps } = props

    if (options.length > 0 && typeof options[0] === "object" && typeof id !== "string") {
        throw new Error("If options are an object, you must specify a string key to filter by as a prop named 'id'")
    }

    const filterOptions = (value) => {
        if (options.length > 0 && typeof options[0] === "object") {
            if (isCaseSensitive) {
                return limit ? options.filter(opt => opt[id].indexOf(value) !== -1).slice(0, limit) : options.filter(opt => opt[id].indexOf(value) !== -1)
            }
            else {
                return limit ? options.filter(opt => opt[id].toLowerCase().indexOf(value.toLowerCase()) !== -1).slice(0, limit) : options.filter(opt => opt[id].toLowerCase().indexOf(value.toLowerCase()) !== -1)
            }
        }
        else {
            if (isCaseSensitive) {
                return limit ? options.filter(opt => opt.indexOf(value) !== -1).slice(0, limit) : options.filter(opt => opt.indexOf(value) !== -1)
            }
            else {
                return limit ? options.filter(opt => opt.toLowerCase().indexOf(value.toLowerCase()) !== -1).slice(0, limit) : options.filter(opt => opt.toLowerCase().indexOf(value.toLowerCase()) !== -1)
            }
        }
    }

    const [open, setOpen] = useState(Boolean(defaultOpen))
    const [offset, setOffset] = useState(0)
    const [remainingOptions, setRemainingOptions] = useState(filterOptions(search))

    useEffect(() => {
        if (search.length > 0) {
            refreshSuggestions()
        }
    }, [])

    const refreshSuggestions = (value) => {
        setRemainingOptions(filterOptions(value))
    }


    const handleEnter = e => {
        if (remainingOptions.length > 0) {
            setOpen(false);
            e.target.blur();
            setValue(remainingOptions[offset]);
            refreshSuggestions(remainingOptions[offset]);
            setOffset(0);
        }
        else if (canCreate) {
            setOpen(false);
            e.target.blur();
        }
    };
    const handleClickAway = () => {
        setOpen(false)
        setOffset(0)
    }

    const handleClick = (option) => {
        setValue(option)
        refreshSuggestions(option)
        setOpen(false)
        setOffset(0)
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleEnter(e)
            setOffset(0)
        }
        else if (e.keyCode === 38) {
            e.preventDefault()
            if (offset > 0) {
                setOffset(offset - 1)
                setValue(remainingOptions[offset - 1])
            }
        }
        else if (e.keyCode === 40) {
            if (offset < remainingOptions.length - 1) {
                setOffset(offset + 1)
                setValue(remainingOptions[offset + 1])
            }
        }

        if (onKeyDown) {
            onKeyDown(e)
        }
    }

    const handleOnClick = (e) => {
        setOpen(true)
        if (onClick) {
            onClick(e)
        }
    }

    const handleChange = (e) => {
        refreshSuggestions(e.target.value)
        setOffset(0)
        setValue(e.target.value)
        if (onChange) {
            onChange(e)
        }
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <ClickAwayListener onClickAway={() => handleClickAway()}>
                <div className={className ? (className + " google-typeahead-base") : "google-typeahead-base"} style = {open ?  { borderTopLeftRadius:"22px", borderTopRightRadius:"22px"} : { borderRadius:"22px"}}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "1rem", paddingRight: "1rem" }} >
                        {LeftSideComponent && <LeftSideComponent />}
                        <input onClick={() => handleOnClick()} className="google-typeahead-input" onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => handleChange(e)} value={search} {...remainingProps} />
                        {RightSideComponent && <RightSideComponent />}
                    </div>
                    <div style = {{position:"absolute", zIndex: zIndex ? zIndex : "1", width:"100%", backgroundColor:"white", borderBottomLeftRadius:"22px", borderBottomRightRadius:"22px"}}>
                        {
                            open && (
                                remainingOptions.length == 0 ?
                                    (canCreate ?
                                        <li className="google-typeahead-item google-typeahead-selected" style={{ borderBottomRightRadius: "22px", borderBottomLeftRadius: "22px" }}><div className="google-typeahead-text"><b>{search}</b></div></li>
                                        :
                                        <li className="google-typeahead-item" style={{ borderBottomRightRadius: "22px", borderBottomLeftRadius: "22px" }}><div className="google-typeahead-text">{emptyLabel ? emptyLabel : "No Items Found"}</div></li>
                                    )
                                    :
                                    remainingOptions.map((opt, index) => {
                                        return (
                                            <li className={index === offset ? "google-typeahead-item google-typeahead-selected" : "google-typeahead-item"} key={index} onClick={() => handleClick(opt)} style={remainingOptions.length - 1 === index ? { borderBottomRightRadius: "22px", borderBottomLeftRadius: "22px" } : undefined}><div className="google-typeahead-text"><BoldedText text={typeof remainingOptions[0] === "object" ? opt[id] : opt} shouldBeBold={search} isCaseSensitive={isCaseSensitive} /> </div></li>
                                        )
                                    }))
                        }
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    )
}


function BoldedText({ text, shouldBeBold, isCaseSensitive }) {
    const textArray = isCaseSensitive ? text.split(shouldBeBold) : text.toLowerCase().split(shouldBeBold.toLowerCase());
    var count = 0
    return (
        <span>
            {textArray.map((item, index) => {
                count += index === 0 ? (item.length) : (item.length + shouldBeBold.length)
                return (
                    <Wrapper key={index}>
                        {text.substring(count - item.length, count)}
                        {index !== textArray.length - 1 && (
                            <b>{isCaseSensitive ? shouldBeBold : text.substring(count, count + shouldBeBold.length)}</b>
                        )}
                    </Wrapper>
                )
            })}
        </span>
    )
}

const Wrapper = ({ children }) => <>{children}</>

GoogleTypeahead.propTypes = {
    options: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    canCreate: PropTypes.bool,
    isCaseSensitive: PropTypes.bool,
    defaultOpen: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    limit: PropTypes.number,
    id: PropTypes.string,
    emptyLabel: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    zIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    LeftSideComponent: PropTypes.elementType,
    RightSideComponent: PropTypes.elementType
}
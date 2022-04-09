import { useEffect, memo } from "react";

export const MemoChild = (props) => {
    const { name, value, onChange } = props || {};
    useEffect(() => {
        console.log(`child-${name} component did mount`);
        return () => {
            console.log(`child-${name} component will unmount`);
        };
    });
    return (
        <div>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={name.replace("_", " ")}
            />
        </div>
    );
};
export const MemoizedComponent = memo(MemoChild);

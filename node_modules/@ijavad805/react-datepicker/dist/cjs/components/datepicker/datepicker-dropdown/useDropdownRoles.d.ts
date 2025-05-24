export declare enum EDropdownPositions {
    rightBottom = "right-bottom",
    leftBottom = "left-bottom",
    rightTop = "right-top",
    leftTop = "left-top"
}
declare const useDropdownRoles: (ref: any, open: boolean) => {
    position: EDropdownPositions | undefined;
    fix: "fix-top" | "fix-bottom" | undefined;
};
export default useDropdownRoles;

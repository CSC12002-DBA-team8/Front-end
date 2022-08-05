const stateInfo = {
    maTour: "NT1",
    tenTour:"Nha Trang",
    moTa:"",
    listImg:[
        {hinhAnh:"",title:"",noiDung:""},
        {hinhAnh:"",title:"",noiDung:""},
        {hinhAnh:"",title:"",noiDung:""},
        {hinhAnh:"",title:"",noiDung:""}
    ]
};

export const InfoReducer = (state = stateInfo, action) => {
  return { ...state };
};

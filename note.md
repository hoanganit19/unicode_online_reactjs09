# Redux

- Redux Core --> Mất thời gian, chỉ sử dụng khi học tập
- Redux Tookit --> Nhanh hơn, áp dụng khi đi làm
- Redux Middleware: Custom, Redux Thunk, Redux Saga,...

## Thư viện sử dụng

- React Redux
- Redux Tookit
- Redux Thunk
- Redux Saga

## React Redux

Component: Provider
Hook: useDispatch, useSelector

## Các thành phần

- Store
- State
- Action --> Object mô tả hành động
- Action Creator --> Hàm trả về action
- Dispatch
- Reducer --> Hàm dùng để cập nhật State (Chứa logic cập nhật State)
- Selector --> Lắng nghe sự thay đổi State trên Store để re-render Component và trả về State từ Store

## Redux Middleware

Component (UI) ==> Dispatch ==> Middleware ==> Reducer ==> State

## Redux Toolkit

- Đóng gói các thành phần của Redux trong 1 thư viện
- Hỗ trợ rất nhiều các tính năng
- Cấu hình, thiết lập nhanh hơn, ngắn hơn

```
Slice 1
    - Reducer
    - State
    - Action
    - Action Creator

Slice 2
    - Reducer
    - State
    - Action
    - Action Creator

Slice 3
    - Reducer
    - State
    - Action
    - Action Creator
```

Lưu ý: Khi làm việc với Redux Toolkit trong React ==> Cài 2 thư viện

- react-redux
- reduxjs/toolkit

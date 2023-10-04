import {UserState} from "@data-types/user-state";
import {createSlice, PayloadAction} from '@reduxjs/toolkit';


/**
 * import { useSelector, useDispatch } from 'react-redux';
 * import { login, logout, updateInfo } from '@features/user/userSlice';
 * import { RootState } from '../app/store';
 *
 * function UserComponent() {
 *   const dispatch = useDispatch();
 *   const user = useSelector((state: RootState) => state.user);
 *
 *   return (
 *     <div>
 *       {user.isLoggedIn ? (
 *         <div>
 *           <h1>Welcome, {user.name}</h1>
 *           <button onClick={() => dispatch(logout())}>Logout</button>
 *           <button onClick={() => dispatch(updateInfo({ name: 'NewName' }))}>Update Name</button>
 *         </div>
 *       ) : (
 *         <button onClick={() => dispatch(login({ id: '1', name: 'Alex', email: 'alex@email.com' }))}>
 *           Login
 *         </button>
 *       )}
 *     </div>
 *   );
 * }
 */

const initialState: UserState = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ id: string; firstName: string; lastName: string; email: string }>) {
            const {id, firstName, lastName, email} = action.payload;
            state.id = id;
            state.firstName = firstName;
            state.lastName = lastName;
            state.email = email;
            state.isLoggedIn = true;
        },
        logout(state) {
            Object.assign(state, initialState);
        },
        updateInfo(state, action: PayloadAction<{ firstName?: string, lastName?: string; email?: string }>) {
            const {firstName, lastName, email} = action.payload;
            state.firstName = firstName || state.firstName
            state.lastName = firstName || state.lastName
            state.email = email || state.email
        },
    },
});

export const {login, logout, updateInfo} = userSlice.actions;

export default userSlice.reducer;
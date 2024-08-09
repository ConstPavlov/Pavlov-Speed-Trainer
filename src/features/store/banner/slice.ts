import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface BannerState {
	isBanner: boolean
}

const initialState: BannerState = {
	isBanner: false
}

export const bannerSlice = createSlice({
	name: 'banner',
	initialState,
	reducers: {
		toggleBanner: (state, action) => {
			state.isBanner = action.payload
		}
	}
})

export const { toggleBanner } = bannerSlice.actions

export const bannerData = (state: RootState) => state.banner

export default bannerSlice.reducer

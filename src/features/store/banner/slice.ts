import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface BannerState {
	isBanner: boolean
	isClicked: boolean
}

const initialState: BannerState = {
	isBanner: false,
	isClicked: false
}

export const bannerSlice = createSlice({
	name: 'banner',
	initialState,
	reducers: {
		toggleBanner: (state, action) => {
			state.isBanner = action.payload
		},
		setClicked: (state, action) => {
			state.isClicked = action.payload
		}
	}
})

export const { toggleBanner, setClicked } = bannerSlice.actions

export const bannerData = (state: RootState) => state.banner

export default bannerSlice.reducer

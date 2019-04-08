import { loadFriendlyName } from '../../../../util/HTML5'

export interface IWalletStore {
	address: string
	friendly: string
	editingFriendly: boolean
	friendlyTextField: string | undefined
	submittingFriendly: boolean
	daiBalance: number
	weiDaiBalance: number
	incubatingWeiDai: number
}

export const initialState: IWalletStore = {
	address: '0x0123',//TODO have a saga that runs at page load
	friendly: loadFriendlyName('0x0123'),
	editingFriendly: false,
	friendlyTextField: '',
	daiBalance: 0,
	weiDaiBalance: 0,
	incubatingWeiDai: 0,
	submittingFriendly: false
}
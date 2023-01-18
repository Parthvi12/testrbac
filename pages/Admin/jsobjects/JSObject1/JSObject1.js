export default {
	myVar1: [],
	myVar2: {},
	search: () => {
		if(Select2.selectedOptionValue.length==0){
			return select_work_orders.data
		}
		else{
			return(select_work_orders.data.filter(user => user.agent==(Select2.selectedOptionLabel)))
		}
	}
}
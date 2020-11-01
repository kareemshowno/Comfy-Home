export const formatCurrency = (num) => {
	return '$' + Number(num.toLocaleString(1));
}
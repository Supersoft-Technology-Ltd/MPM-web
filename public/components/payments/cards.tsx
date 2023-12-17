import rent from '../../assets/rental.png'
import bills from '../../assets/invoice.png'
import airtime from '../../assets/buy-airtime.png'
import request from '../../assets/recieve-payment.png'
import financials from '../../assets/financials.png'
import history from '../../assets/transaction-history.png'

export const PaymentCards = [
    {
        id: 1,
        img: rent,
        text: 'Pay Rent',
        action: "Pay Rent"
    },
    {
        id: 2,
        img: bills,
        text: 'Pay Bills',
        action: "Pay Bills"
    },
    {
        id: 3,
        img: airtime,
        text: 'Airtime Topup',
        action: "Airtime Topup"
    },
    {
        id: 4,
        img: request,
        text: 'Request Payment',
        action: "Request Payment"
    },
    {
        id: 5,
        img: financials,
        text: 'Your Financials',
        action: "Your Financials"
    },
    {
        id: 6,
        img: history,
        text: 'Transaction History',
        action: "Transaction History"
    },
]
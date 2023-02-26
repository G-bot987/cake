export interface ApiOrderInterface {

    id: number;
    admin_graphql_api_id: string,
    app_id: number,
    browser_ip: string,
    buyer_accepts_marketing: boolean,
    cancel_reason?: string,
    cancelled_at?: string,
    cart_token: any,
    checkout_id: number,
    checkout_token: string,
    client_details: {
        accept_language: any,
        browser_height: any,
        browser_ip: string,
        browser_width: any,
        session_hash: any,
        user_agent: string
    },
    closed_at: any,
    company?: string,
    confirmed?: boolean,
    contact_email: any,
    created_at: string,
    currency: string,
    current_subtotal_price: string,
    current_subtotal_price_set: {
        shop_money: { amount: string, currency_code: string },
        presentment_money: { amount: string, currency_code: string }
    },
    current_total_discounts: string,
    current_total_discounts_set: {
        shop_money: { amount: string, currency_code: string },
        presentment_money: { amount: string, currency_code: string }
    },
    current_total_duties_set: boolean,
    current_total_price: string,
    current_total_price_set: {
        shop_money: { amount: string, currency_code: string },
        presentment_money: { amount: string, currency_code: string }
    },
    current_total_tax: string,
    current_total_tax_set: {
        shop_money: { amount: string, currency_code: string },
        presentment_money: { amount: string, currency_code: string }
    },
    customer_locale: string,
    device_id: any,
    discount_codes: any[],
    email?: string,
    estimated_taxes: boolean | string,
    financial_status: string,
    fulfillment_status: any,
    gateway: string,
    landing_site: any,
    landing_site_ref: any,
    location_id: number,
    merchant_of_record_app_id: any,
    name: string,
    note: any,
    note_attributes: any[],
    number: number,
    order_number: number,
    order_status_url: string,
    original_total_duties_set: any,
    payment_gateway_names: string[],
    phone?: string,
    presentment_currency: string,
    processed_at: string,
    processing_method: string,
    reference: string,
    referring_site: any,
    source_identifier: string,
    source_name: string,
    source_url: any,
    subtotal_price: string,
    subtotal_price_set: {
        shop_money: { amount: string, currency_code: string },
        presentment_money: { amount: string, currency_code: string }
    },
    tags: string,
    tax_lines: any[],
    taxes_included: boolean,
    test: boolean,
    token: string,
    total_discounts: string,
    total_discounts_set: {
        shop_money: { amount: string, currency_code: string },
        presentment_money: { amount: string, currency_code: string }
    },
    total_line_items_price: string,
    total_line_items_price_set: {
        shop_money: { amount: string, currency_code: string },
        presentment_money: { amount: string, currency_code: string }
    },
    total_outstanding: string,
    total_price: string,
    total_price_set: {
        shop_money: { amount: string, currency_code: string },
        presentment_money: { amount: string, currency_code: string }
    },
    total_shipping_price_set: {
        shop_money: { amount: string, currency_code: string },
        presentment_money: { amount: string, currency_code: string }
    },
    total_tax: string,
    total_tax_set: {
        shop_money: { amount: string, currency_code: string },
        presentment_money: { amount: string, currency_code: string }
    },
    total_tip_received: string,
    total_weight: number,
    updated_at: string,
    user_id: any,
    discount_applications: any[],
    fulfillments: any[],
    line_items: [
        {
            id: number,
            admin_graphql_api_id: string,
            fulfillable_quantity: number,
            fulfillment_service: string,
            fulfillment_status: any,
            gift_card: boolean,
            grams: number,
            name: string,
            price: string,
            price_set: object[],
            product_exists: boolean,
            product_id: number,
            properties: any[],
            quantity: number,
            requires_shipping: boolean,
            sku: string,
            taxable: boolean,
            title: string,
            total_discount: string,
            total_discount_set?: object[],
            variant_id: number,
            variant_inventory_management: string,
            variant_title: any,
            vendor: string,
            tax_lines: any[],
            duties: any[],
            discount_allocations: any[]
        }
    ],
    payment_terms: any,
    refunds: any[],
    shipping_lines: any[]

}
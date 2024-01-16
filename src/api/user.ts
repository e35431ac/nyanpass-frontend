import { batchIds } from "../util/misc";
import { fetchApi } from "./fetchw";
import { ReqSearchRules } from "./model_api";

export class apiUser {
    async info(): Promise<any> {
        var rsp = await fetchApi("/api/v1/user/info");
        var data = await rsp.json();
        return data;
    }

    async search(req: ReqSearchRules): Promise<any> {
        var rsp = await fetchApi("/api/v1/user/search_rules", {
            method: "POST",
            body: JSON.stringify(req),
        });
        var data = await rsp.json();
        return data;
    }

    async renew(): Promise<any> {
        var rsp = await fetchApi("/api/v1/user/renew", {
            method: "POST",
        });
        var data = await rsp.json();
        return data;
    }

    async telegram_bind(unbind?: boolean): Promise<any> {
        let url = "/api/v1/user/telegram/bind"
        if (unbind) url += "?unbind=1"
        var rsp = await fetchApi(url, {
            method: "POST",
        });
        var data = await rsp.json();
        return data;
    }

    async resetpassword(obj: any, affectId?: string | number): Promise<any> {
        let url = "/api/v1/user/reset_password"
        if (affectId != null) url = "/api/v1/admin/user/" + affectId + "/reset_password"
        var rsp = await fetchApi(url, {
            method: "POST",
            body: JSON.stringify(obj)
        });
        var data = await rsp.json();
        return data;
    }

    async update_column(column: string, value: any): Promise<any> {
        var rsp = await fetchApi("/api/v1/user/update_column", {
            method: "POST",
            body: JSON.stringify({
                column: column,
                value: value,
            })
        });
        var data = await rsp.json();
        return data;
    }

    async devicegroup_list(): Promise<any> {
        var rsp = await fetchApi("/api/v1/user/devicegroup");
        var data = await rsp.json();
        return data;
    }

    async devicegroup_create(obj: any): Promise<any> {
        var rsp = await fetchApi("/api/v1/user/devicegroup", {
            method: "PUT",
            body: JSON.stringify(obj)
        });
        var data = await rsp.json();
        return data;
    }

    async devicegroup_update(id: number, obj: any): Promise<any> {
        var rsp = await fetchApi("/api/v1/user/devicegroup/" + id, {
            method: "POST",
            body: JSON.stringify(obj)
        });
        var data = await rsp.json();
        return data;
    }

    async devicegroup_delete(ids: any[]): Promise<any> {
        var rsp = await fetchApi("/api/v1/user/devicegroup", {
            method: "DELETE",
            body: JSON.stringify({
                ids: batchIds(ids)
            })
        });
        var data = await rsp.json();
        return data;
    }

    async devicegroup_reset_token(id: number): Promise<any> {
        var rsp = await fetchApi("/api/v1/user/devicegroup/reset_token", {
            method: "POST"
        });
        var data = await rsp.json();
        return data;
    }

    async devicegroup_reset_traffic(ids: any[]): Promise<any> {
        var rsp = await fetchApi("/api/v1/user/devicegroup/reset_traffic", {
            method: "POST",
            body: JSON.stringify({
                ids: batchIds(ids)
            })
        });
        var data = await rsp.json();
        return data;
    }

    async devicegroup_looking_glass(id: number, method: string, target: string): Promise<any> {
        var rsp = await fetchApi("/api/v1/user/devicegroup/" + id + "/looking_glass", {
            method: "POST",
            body: JSON.stringify({
                method: method,
                target: target,
            })
        });
        var data = await rsp.json();
        return data;
    }

    async shop_plan_list(): Promise<any> {
        var rsp = await fetchApi("/api/v1/user/shop/plan");
        var data = await rsp.json();
        return data;
    }

    async shop_plan_purchase(planId: number): Promise<any> {
        var rsp = await fetchApi("/api/v1/user/shop/purchase", {
            method: "POST",
            body: JSON.stringify({
                "plan_id": planId,
            })
        });
        var data = await rsp.json();
        return data;
    }

    async shop_deposit(currency: string, amount: number): Promise<any> {
        var rsp = await fetchApi("/api/v1/user/shop/deposit", {
            method: "POST",
            body: JSON.stringify({
                "amount": amount,
                "currency": currency,
            })
        });
        var data = await rsp.json();
        return data;
    }

    async shop_order_list(qs: string): Promise<any> {
        var rsp = await fetchApi("/api/v1/user/shop/order?" + qs);
        var data = await rsp.json();
        return data;
    }
}

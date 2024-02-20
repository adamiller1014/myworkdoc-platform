import { z } from "zod";
import { protectedProcedure, router } from "../../../trpc";

export interface GeoLookupResult {
    address: {
        houseNumber?: any;
        street?: any;
        city?: any;
        state?: any;
        postalCode?: any;
        countryCode?: any;
        county?: any;
        label?: any;
    }
}

export const addressesRouter = router({

    autocomplete: protectedProcedure
        .input(z.string())
        .query(async ({ input }) => {
            const apiKey = process.env.GEOCODER_KEY;

            if (!apiKey) {
                throw new Error('GEOCODER_KEY is not set');
            }

            const baseUrl = 'https://autocomplete.search.hereapi.com/v1/autocomplete';
            const params = {
                apiKey,
                q: input,
                in: "countryCode:USA"
            };

            const response = await fetch(`${baseUrl}?apiKey=${params.apiKey}&q=${params.q}&in=${params.in}`)
                .then(res => res.json())
            const geoRec = response;

            const results = geoRec?.items?.map((item: GeoLookupResult) => ({
                line1: (item?.address?.houseNumber ?? '') + ' ' + (item?.address?.street ?? ''),
                line2: null,
                city: item?.address?.city ?? null,
                state: item?.address?.state ?? null,
                postal_code: item?.address?.postalCode ?? null,
                country: item?.address?.countryCode ?? null,
                county: item?.address?.county ?? null,
                formatted: item?.address?.label?.split(", United States")[0] ?? null

            }));

            return results;
        }),

});

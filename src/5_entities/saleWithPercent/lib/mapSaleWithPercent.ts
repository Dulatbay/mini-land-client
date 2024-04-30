import { ResponseSaleWithPercentDto } from '../api/types';
import { SaleWithPercentModel } from '../model/types';

export const mapSaleWithPercent = (
    dto: ResponseSaleWithPercentDto
): SaleWithPercentModel => ({
    id: dto.id,
    title: dto.title,
    enabled: dto.enabled,
    percent: dto.percent,
});

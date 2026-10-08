import type { AvailableProfessional, SectorKey } from './publication';

export const sectorLabels: Record<SectorKey, string> = {
  projecten: 'Projectmanagement & processen',
  facility: 'Facility Management & bedrijfsvoering',
  vastgoed: 'Vastgoed & huisvesting',
  techniek: 'Techniek',
};

export function matchingProfessionals(profiles: AvailableProfessional[], sector: string, engagement: string) {
  return profiles.filter(profile => (!sector || profile.sector === sector)
    && (!engagement || profile.engagementTypes?.some(type => type === engagement)));
}

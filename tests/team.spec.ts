import { expect } from "chai";
import { assert } from "console";
import { Team } from "../src/team";

describe('Team Test', () => {
    let team : Team;

    beforeEach((done) => {
        team = new Team();
        done();
    });

    it('should create a team', () => {
        expect(team).is.instanceOf(Team);
    });

    it('should have an empty list of vehicles', () => {
        expect(team.vehicles).is.empty;
    })

    it('should have a default cans', () => {
        expect(team.cans).is.equal(50)
    });
})
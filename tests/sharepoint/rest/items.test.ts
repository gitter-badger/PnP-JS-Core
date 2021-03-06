"use strict";

import * as Util from "../../../src/utils/util";
import { expect } from "chai";
import { Items, Item } from "../../../src/sharepoint/rest/items";

describe("Items", () => {

    let basePath = "_api/web/lists/getByTitle('Tasks')";
    let items: Items;

    beforeEach(() => {
        items = new Items(basePath);
    });

    it("Should be an object", () => {
        expect(items).to.be.a("object");
    });

    describe("url", () => {
        let path = Util.combinePaths(basePath, "items");
        it("Should return " + path, () => {
            expect(items.toUrl()).to.equal(path);
        });
    });
    describe("getById", () => {
        let path = Util.combinePaths(basePath, "items(1)");
        it("Should return " + path, () => {
            expect(items.getById(1).toUrl()).to.equal(path);
        });
    });
});

describe("Item", () => {

    let basePath = "_api/web/lists/getByTitle('Tasks')/items(1)";
    let item: Item;

    beforeEach(() => {
        item = new Item(basePath);
    });

    it("Should be an object", () => {
        expect(item).to.be.a("object");
    });

    describe("attachmentFiles", () => {
        let path = Util.combinePaths(basePath, "AttachmentFiles");
        it("Should return " + path, () => {
            expect(item.attachmentFiles.toUrl()).to.equal(path);
        });
    });

    describe("contentType", () => {
        let path = Util.combinePaths(basePath, "ContentType");
        it("Should return " + path, () => {
            expect(item.contentType.toUrl()).to.equal(path);
        });
    });

    describe("effectiveBasePermissions", () => {
        let path = Util.combinePaths(basePath, "EffectiveBasePermissions");
        it("Should return " + path, () => {
            expect(item.effectiveBasePermissions.toUrl()).to.equal(path);
        });
    });

    describe("effectiveBasePermissionsForUI", () => {
        let path = Util.combinePaths(basePath, "EffectiveBasePermissionsForUI");
        it("Should return " + path, () => {
            expect(item.effectiveBasePermissionsForUI.toUrl()).to.equal(path);
        });
    });

    describe("fieldValuesAsHTML", () => {
        let path = Util.combinePaths(basePath, "FieldValuesAsHTML");
        it("Should return " + path, () => {
            expect(item.fieldValuesAsHTML.toUrl()).to.equal(path);
        });
    });

    describe("fieldValuesAsText", () => {
        let path = Util.combinePaths(basePath, "FieldValuesAsText");
        it("Should return " + path, () => {
            expect(item.fieldValuesAsText.toUrl()).to.equal(path);
        });
    });

    describe("fieldValuesForEdit", () => {
        let path = Util.combinePaths(basePath, "FieldValuesForEdit");
        it("Should return " + path, () => {
            expect(item.fieldValuesForEdit.toUrl()).to.equal(path);
        });
    });

    describe("folder", () => {
        let path = Util.combinePaths(basePath, "Folder");
        it("Should return " + path, () => {
            expect(item.folder.toUrl()).to.equal(path);
        });
    });
});

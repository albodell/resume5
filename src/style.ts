import {
  AlignmentType,
  TabStopPosition,
  IStylesOptions,
  convertInchesToTwip
} from "docx";

export default class DocumentCreator {
  public getStyles(): IStylesOptions {
    const styles: IStylesOptions = {
      default: {
        title: {
          run: {
            font: "Calibri",
            size: 72,
            bold: true,
            color: "000000"
          },
          paragraph: {
            alignment: AlignmentType.CENTER,
            spacing: { line: 340 }
          }
        },
        heading1: {
          run: {
            font: "Calibri",
            size: 28,
            bold: true,
            color: "#1f4e79"
          }
        },
        heading2: {
          run: {
            font: "Calibri",
            size: 36,
            bold: true
          },
          paragraph: {
            spacing: { line: 340 }
          }
        },
        heading3: {
          run: {
            font: "Calibri",
            size: 24,
            bold: false,
            color: "#1f4e79"
          },
          paragraph: {
            alignment: AlignmentType.LEFT,
            spacing: { line: 340 }
          }
        }
      },
      paragraphStyles: [
        {
          id: "normalPara",
          name: "Normal Para",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: {
            font: "Calibri",
            size: 24,
            bold: false
          },
          paragraph: {
            spacing: {
              line: 276,
              before: 20 * 72 * 0.1,
              after: 20 * 72 * 0.05
            },
            rightTabStop: TabStopPosition.MAX,
            leftTabStop: 453.543307087
          }
        },
        {
          id: "normalPara2",
          name: "Normal Para2",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: {
            font: "Calibri",
            size: 32,
            bold: false
          },
          paragraph: {
            alignment: AlignmentType.JUSTIFIED,
            spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 }
          }
        },
        {
          id: "aside",
          name: "Aside",
          basedOn: "Normal",
          next: "Normal",
          run: {
            color: "999999",
            italics: true
          },
          paragraph: {
            spacing: { line: 276 },
            indent: { left: convertInchesToTwip(0.5) }
          }
        },
        {
          id: "wellSpaced",
          name: "Well Spaced",
          basedOn: "Normal",
          paragraph: {
            spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 }
          }
        }
      ]
    };
    return styles;
  }
}

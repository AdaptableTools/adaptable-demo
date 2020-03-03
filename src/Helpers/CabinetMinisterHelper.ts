export class CabinetMinisterDataHelper {
  public getCabinetData(): any[] {
    var cabinetData = [
      {
        government: ['Gavin Williamson'],
        cabinetId: 1,
        title: 'Secretary of State',
        area: 'Education',
        salary: 140000,
        privyCounsellor: true,

        dateAppointed: '21 May 2017',
      },
      {
        government: ['Gavin Williamson', 'Nick Gibb'],
        cabinetId: 11,
        title: 'Minister of State',
        area: 'Education',
        salary: 96000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: true,
      },
      {
        government: ['Gavin Williamson', 'Michelle Donelan'],
        cabinetId: 12,
        title: 'Minister of State',
        area: 'Education',
        salary: 96000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Gavin Williamson', 'Baroness Berridge'],
        cabinetId: 13,
        title: 'Parliamentary Under-Secretary',
        area: 'Education',
        salary: 87000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Gavin Williamson', 'Gillian Keegan'],
        cabinetId: 14,
        title: 'Parliamentary Under-Secretary',
        area: 'Education',
        salary: 87000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Gavin Williamson', 'Vicky Ford'],
        cabinetId: 15,
        title: 'Parliamentary Under-Secretary',
        area: 'Education',
        salary: 87000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Grant Shapps'],
        cabinetId: 2,
        title: 'Secretary of State',
        area: 'Transport',
        salary: 140000,
        privyCounsellor: true,

        //appointed:
      },
      {
        government: ['Grant Shapps', 'Chris Heaton-Harris'],
        cabinetId: 21,
        title: 'Minister of State',
        area: 'Transport',
        salary: 96000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Grant Shapps', 'Andrew Stephenson'],
        cabinetId: 22,
        title: 'Minister of State',
        area: 'Transport',
        salary: 96000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Grant Shapps', 'Kelly Tolhurst'],
        cabinetId: 23,
        title: 'Parliamentary Under-Secretary',
        area: 'Transport',
        salary: 87000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Grant Shapps', 'Rachel Maclean'],
        cabinetId: 24,
        title: 'Parliamentary Under-Secretary',
        area: 'Transport',
        salary: 87000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Grant Shapps', 'Baroness Vere of Norbiton'],
        cabinetId: 25,
        title: 'Parliamentary Under-Secretary',
        area: 'Transport',
        salary: 87000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Priti Patel'],
        cabinetId: 3,
        title: 'Secretary of State',
        area: 'Home Office',
        salary: 140000,
        privyCounsellor: true,

        //appointed:
      },
      {
        government: ['Priti Patel', 'James Brokenshire'],
        cabinetId: 31,
        title: 'Minister of State',
        area: 'Home Office',
        salary: 96000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: true,
      },
      {
        government: ['Priti Patel', 'Kit Malthouse'],
        cabinetId: 32,
        title: 'Minister of State',
        area: 'Home Office',
        salary: 96000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Priti Patel', 'Baroness Williams of Trafford'],
        cabinetId: 33,
        title: 'Minister of State',
        area: 'Home Office',
        salary: 96000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: true,
      },
      {
        government: ['Priti Patel', 'Victoria Atkins'],
        cabinetId: 34,
        title: 'Parliamentary Under-Secretary',
        area: 'Home Office',
        salary: 87000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Priti Patel', 'Kevin Foster'],
        cabinetId: 35,
        title: 'Parliamentary Under-Secretary',
        area: 'Home Office',
        salary: 87000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Priti Patel', 'Chris Philp'],
        cabinetId: 36,
        title: 'Parliamentary Under-Secretary',
        area: 'Home Office',
        salary: 87000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Ben Wallace'],
        cabinetId: 4,
        title: 'Secretary of State',
        area: 'Defence',
        salary: 140000,
        privyCounsellor: true,

        //appointed:
      },
      {
        government: ['Ben Wallace', 'Jeremy Quin'],
        cabinetId: 41,
        title: 'Minister of State',
        area: 'Defence',
        salary: 96000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Ben Wallace', 'Baroness Goldie '],
        cabinetId: 42,
        title: 'Minister of State',
        area: 'Defence',
        salary: 0,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Ben Wallace', 'James Heappey'],
        cabinetId: 43,
        title: 'Parliamentary Under-Secretary',
        area: 'Defence',
        salary: 87000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Ben Wallace', 'Johnny Mercer'],
        cabinetId: 44,
        title: 'Parliamentary Under-Secretary',
        area: 'Defence',
        salary: 87000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Dominic Raab'],
        cabinetId: 5,
        title: 'Secretary of State',
        area: 'Foreign Office',
        salary: 140000,
        privyCounsellor: true,

        //appointed:
      },
      {
        government: ['Dominic Raab', 'James Cleverly'],
        cabinetId: 51,
        title: 'Minister of State',
        area: 'Foreign Office',
        salary: 96000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: true,
      },
      {
        government: ['Dominic Raab', 'Nigel Adams'],
        cabinetId: 52,
        title: 'Minister of State',
        area: 'Foreign Office',
        salary: 96000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Dominic Raab', 'Lord Ahmad of Wimbledon'],
        cabinetId: 53,
        title: 'Minister of State',
        area: 'Foreign Office',
        salary: 96000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Dominic Raab', 'Lord Goldsmith of Richmond Park'],
        cabinetId: 54,
        title: 'Minister of State',
        area: 'Foreign Office',
        salary: 96000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Dominic Raab', 'James Duddridge'],
        cabinetId: 55,
        title: 'Parliamentary Under-Secretary',
        area: 'Foreign Office',
        salary: 87000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Dominic Raab', 'Wendy Morton'],
        cabinetId: 56,
        title: 'Parliamentary Under-Secretary',
        area: 'Foreign Office',
        salary: 87000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Dominic Raab', 'Baroness Sugg'],
        cabinetId: 57,
        title: 'Minister of State',
        area: 'Foreign Office',
        salary: 96000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Rishi Sunak'],
        cabinetId: 6,
        title: 'Secretary of State',
        area: 'Treasury',
        salary: 140000,
        privyCounsellor: true,

        //appointed:
      },
      {
        government: ['Rishi Sunak', 'Stephen Barclay'],
        cabinetId: 61,
        title: 'Minister of State',
        area: 'Treasury',
        salary: 96000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: true,
      },
      {
        government: ['Rishi Sunak', 'Jesse Norman'],
        cabinetId: 62,
        title: 'Minister of State',
        area: 'Treasury',
        salary: 96000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: true,
      },
      {
        government: ['Rishi Sunak', 'Lord Agnew of Oulton'],
        cabinetId: 63,
        title: 'Minister of State',
        area: 'Treasury',
        salary: 96000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Rishi Sunak', 'John Glen'],
        cabinetId: 64,
        title: 'Parliamentary Under-Secretary',
        area: 'Treasury',
        salary: 87000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
      {
        government: ['Rishi Sunak', 'Kemi Badenoch'],
        cabinetId: 65,
        title: 'Parliamentary Under-Secretary',
        area: 'Treasury',
        salary: 87000,
        staff: this.generateRandomInt(10, 200),
        budget: this.generateRandomInt(120000, 300000),
        privyCounsellor: false,
      },
    ];
    return cabinetData;
  }

  public generateRandomInt(minValue: number, maxValue: number): number {
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  }
}

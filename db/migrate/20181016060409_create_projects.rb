class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :lead_id, null: false
      t.timestamps null: false
    end

    add_index :projects, :name, unique: true

    create_table :project_users do |t|
      t.references :project
      t.references :user
      t.timestamps null: false
    end
  end
end
